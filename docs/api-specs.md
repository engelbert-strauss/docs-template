---
id: api-specs
title: Api Specs
hide_table_of_contents: true
---
This page should give a rough and quick overview of the available public
API calls this microservice provides. See it as an excerpt of the swagger
page.

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

### `POST /documentations`
Creates a new documentation. Please provide a
[`DocumentationDto`](interfaces.md#docs-dto) model as data. If the name of
the documentation does not yet exists, you will get a `200` result with the
just created [`DocumentationDto`](interfaces.md#docs-dto) model. Otherwise
you will receive a `400` or `409` error.

### `GET /documentations/{id}`
Gets the documentation with the given `id`. You will get a `404` response
if that id does not exists.

Returns a [`DocumentationDto`](interfaces.md#docs-dto) that represents a
documentation entry.

### `PUT /documentation/{id}`
Updates the documentation with the given `id`. Please provide a 
[`DocumentationDto`](interfaces.md#docs-dto) model for the update. If the
update was successful, you will get a `204` response. Otherwise you will
get a `404` error if the documentation does not exists.

### `DELETE /documentation/{id}`
Deletes the documentation with the given `id`. If the documentation was
deleted, you will get a `204` response. Otherwise you will get a `404`
error if the documentation does not exists.