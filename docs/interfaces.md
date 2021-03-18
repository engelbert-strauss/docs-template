---
id: interfaces
title: Interfaces
---
Please describe your interfaces here like _RabbitMq_, _Apache Kafka_, _Sftp Uploads_, etc.

## Models
### `DocumentationDto` {#docs-dto}
```json
{
    "id": "1234",
    "url": "https://docs.io/content-url",
}
```

## RabbitMq
### `DocumentationAddedMessage`
The microservices publishes the following event when a new documentation
was added. The message contains a [`DocumentationDto`](#docs-dto)

## Apache Kafka
### `escid.documentation.stream`
The microservice pushes documentation as [`DocumentationDto`](#docs-dto)'s
into the stream. Use this stream to get all documentations that are currently
present.
