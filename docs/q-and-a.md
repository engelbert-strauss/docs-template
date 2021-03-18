---
id: q-and-a
title: Q & A
---
## How do I install this template?
Just clone this repository or download it to you local machine. Then drop
the `docs` folder into your microservice repository.

## How do I create a deployment for a documentation?
You need to add a deployable unit based on the docs folder. First you have
to add a teamcity configuration and an octopus project. Then you need to
add a deployment config. See the following example as a starting point.
```xml
<?xml version="1.0" encoding="utf-8"?>
<Deployment ScriptVersion="3">
  <Companyname>ESCID</Companyname>
  <ProjectName>SQUAD</ProjectName>
  <ApplicationName>Microservice.Docs</ApplicationName>
  <Configuration>
    <Properties>
      <Property Name="Port">99999999</Property>
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

For the `nuspec` part you need to make sure to copy the output of the `build`
folder into the `application/microservice/docs` folder.