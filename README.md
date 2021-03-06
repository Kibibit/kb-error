<p align="center">
  <a href="https://github.com/Kibibit/kb-error" target="blank"><img src="kb-error.png" width="150" ></a>
  <h2 align="center">
    @kibibit/kb-error
  </h2>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@kibibit/kb-error"><img src="https://img.shields.io/npm/v/@kibibit/kb-error/latest.svg?style=for-the-badge&logo=npm&color=CB3837"></a>
</p>
<p align="center">
<a href='https://coveralls.io/github/Kibibit/kb-error'><img src=' https://img.shields.io/coveralls/github/Kibibit/kb-error/master' alt='Coverage Status' /></a>

 
</p>
<p align="center">
  Basic erorr class for kibibit projects
</p>
<hr>

## How to install
Go to the root of your project, and run
```bash
npm install --save @kibibit/kb-error
```

## How to use
```javascript
const KbError = require('@kibibit/kb-error');

const err = new kbError();
throw err;
```

### Using ES6 import\TypeScript
make sure you have `"esModuleInterop": true` in your `tsconfig.json`
```typescript
import KbError from '@kibibit/kb-error';
```

## Contributing

If you have suggestions for how announce-it could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## Contributors

Thanks goes to our contributors! ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/ZimGil"><img src="https://avatars3.githubusercontent.com/u/39461857?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gil Tichon</b></sub></a><br /><a href="https://github.com/ZimGil/kb-error/commits?author=ZimGil" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ortichon"><img src="https://avatars0.githubusercontent.com/u/10263615?v=4?s=100" width="100px;" alt=""/><br /><sub><b>O T</b></sub></a><br /><a href="https://github.com/ZimGil/kb-error/commits?author=ortichon" title="Code">💻</a></td>
    <td align="center"><a href="http://thatkookooguy.kibibit.io/"><img src="https://avatars3.githubusercontent.com/u/10427304?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Neil Kalman</b></sub></a><br /><a href="https://github.com/ZimGil/kb-error/commits?author=Thatkookooguy" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

[MIT](LICENSE) © 2020 Gil Tichon <ZimGil@kibibit.io>

