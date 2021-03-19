---
id: q-and-a
title: Q & A
---
## How do I install this template?
Just clone this repository or download it to you local machine. Then drop
the content into a `docs` folder into your microservice repository.

## How do I create a deployable unit?
This depends on your build pipeline and the build scripts that you are using.
The output of your build stage should be a `nuget` package that has the
content of the `build` folder inside the `application` folder.

:::note
You need to add the _Fabio_ route to the path inside the application folder
because in the deployment config we will disable _Fabio stripping_.
:::

You also need to include the health check inside the application folder for
_Consul_. This is nothing that will be provided by _Docusaurus_. Just drop
an `index.html` file into the `.infrastructure/status` folder during your
build stage. The artifact layout should look like this:

```
/application/microservice/docs/
/application/.infrastructure/status/
```

Where `/microservice/docs` is the _Fabio route_ your app will use.

## How should the deployment config look like?
See the following example as a starting point. Notice the following things
1. _Fabio stripping_ is disabled
1. health check url points to `./infrastructure/status/`
1. provide service info is set to `false` 
1. you need to reserve a port as for other services

```xml
<?xml version="1.0" encoding="utf-8"?>
<Deployment ScriptVersion="3">
  <Companyname>ESCID</Companyname>
  <ProjectName>SQUAD</ProjectName>
  <ApplicationName>Microservice.Docs</ApplicationName>
  <Configuration>
    <Properties>
      <Property Name="Port">_PORT_</Property>
      <Property Name="Route">/microservice/docs</Property>
    </Properties>
  </Configuration>
  <ConsulMembers>
    <ConsulMember
      ID="#{ProjectName}#.#{ApplicationName}#.#{DeploymentComputerName}#"
      Name="#{ProjectName}#.#{ApplicationName}#"
      Address="#{DeploymentHostIpAddress}#"
      Port="#{Port}#"
      HttpHealthCheckUrl=".infrastructure/status/"
      EnableFabioRouting="app"
      FabioRoute="#{Route}#"
      FabioStrip=""
      ProvidesServiceInfo="false" />
  </ConsulMembers>
  <Application Type="WebApplication">
    <WebAppPoolProcessModel Identitytype="SpecificUser" Username="#{ServiceAccountNameWeb}#" Password="#{ServiceAccountPasswordWeb}#"/>
    <WebAppPoolManagedRuntimeVersion />
    <WebSiteBindings>
      <WebSiteBinding Protocol="http" Port="#{Port}#" IPAddress="*" HostHeader="" />
    </WebSiteBindings>
  </Application>
</Deployment>
```