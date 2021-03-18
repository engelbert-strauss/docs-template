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

### `GET /documentations/{docId}`
Gets the documentation with the given `docId`. You will get a `404` response
if that id does not exists.

Returns a [`DocumentationDto`](interfaces.md#docs-dto) that represents a documentation entry.
