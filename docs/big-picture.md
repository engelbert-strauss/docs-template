---
id: big-picture
title: Big Picture
---
Share your big picture. Where are you placed in the landscape? Helps for
orientation. Do it graphically and in code. So it can be easily adapted.

## Landscape
![Big Picture](/img/bigpicture.png)

## Graph Code
Just past the following code into http://dreampuf.github.io/GraphvizOnline/
to update the graph on this page.
```python
digraph architecture {
  rankdir=LR;

  // Storage - #303F9F (dark blue)
  node[fillcolor="#303F9F" style="filled" fontcolor="white"];
  mongo[label="MongoDB"];
  
  // Clients - #FFEB3B (yellow)
  node[fillcolor="#FFEB3B" style="filled" fontcolor="black"];
  assemblylines_webui[label="AssemblyLines.WebUi"];
  preparation_webui[label="Preparation.WebUi"];
  shipping_webui[label="Shipping.WebUi"];
  
  // Backends - #C8E6C9 (light green)
  node[fillcolor="#C8E6C9" style="filled" fontcolor="black"];
  assemblylines_webapi[label="AssemblyLines.WebApi"];
  preparation_webapi[label="Preparation.WebApi"];
  shipping_webapi[label="Shipping.WebApi"];
  webapi[label="WebApi"];
  
  // out of scope
  node[fillcolor="#CFD8DC" style="filled" fontcolor="black"];
  wws[label="WWS"];
  syspro[label="Syspro"];
  authorization[label="Authorization.Api"]
  authentication[label="Authentication.Api"]
  
  subgraph clients {
      assemblylines_webui -> {assemblylines_webapi, authentication};
      preparation_webui -> {preparation_webapi, authentication};
      shipping_webui -> {shipping_webapi, authentication};
  }
  
  subgraph backends {
      assemblylines_webapi -> {mongo, authorization};
      preparation_webapi -> {mongo, authorization};
      shipping_webapi -> {mongo, authorization};
      webapi -> {mongo, syspro, wws};
  }
  
  subgraph thirdparties {
      wws -> webapi
      syspro -> webapi
  }
  
  {rank=same; webapi, mongo};
}
```