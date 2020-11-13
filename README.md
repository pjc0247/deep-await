deep-await
====

Turn this code
```
{
  user: await getUser('user_id'),
  article: await getArticle('article_id'),
  boos: await Promise.all([getBoo(), getBoo(), getBoo()]),
}
```
into below:
```js
await deep_await({
  user: getUser('user_id'),
  article: getArticle('article_id'),
  boo: [getBoo(), getBoo(), getBoo()],
});
```
