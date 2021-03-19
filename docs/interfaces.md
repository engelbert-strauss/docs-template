---
id: interfaces
title: Interfaces
---
Please describe your interfaces here like _RabbitMq_, _Apache Kafka_, _Sftp Uploads_, etc.

## Models
### `DocumentationDto` {#docs-dto}
```json
{
    "id": "1",
    "name": "Documentation template",
    "url": "https://engelbert-strauss.github.io/docs-tempalte/",
}
```

## RabbitMq
### `DocumentationChangedMessage`
The microservices publishes the event when a new documentation
was added or an existing documentation was updated. The message contains a
[`DocumentationDto`](#docs-dto).

### `DocumentationDeletedMessage`
The microservice publishes the event when a documentation was deleted. The
event only contains the `id` of the documentation was deleted.

## Apache Kafka
### `documentations.stream`
The microservice pushes documentation as [`DocumentationDto`](#docs-dto)'s
into the stream. Use this stream to get all documentations that are currently
present. In case a a documentation will be deleted, it is removed from the
stream.
