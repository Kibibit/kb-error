## Getting started

Fork this repo and then clone it. Run `npm install` to install dependencies.

## Before submitting a PR

- Make sure your run `npm run generate-types` to make sure the types are synced.
- Make sure your ran `npm run lint:fix` to make sure the code follows the styleguide.
- Run `npm test` to make sure tests are passing, and code coverage didn't drop. Write tests if needed.

### Commits

* Each commit should be a single *logical change*. Don't make several
  *logical changes* in one commit. For example, if a patch fixes a bug and
  optimizes the performance of a feature, split it into two separate commits.

* Don't split a single *logical change* into several commits. For example,
  the implementation of a feature and the corresponding tests should be in the
  same commit.

* Commit *early* and *often*. Small, self-contained commits are easier to
  understand and revert when something goes wrong.

* Commits should be ordered *logically*. For example, if *commit X* depends
  on changes done in *commit Y*, then *commit Y* should come before *commit X*.

Note: While working alone on a local branch that *has not yet been pushed*, it's
fine to use commits as temporary snapshots of your work. However, it still
holds true that you should apply all of the above *before* pushing it.

## Link PRs and issues

To connect between your PR and a specific Issue, write the following somewhere in your PR: `connects to #{PR number}`

## README

If your PR adds new behaviour or modifies existing behaviour, the README should be updated.

## Coding style

> All code in any code-base should look like a single person typed it, no matter how many people contributed.

You might not agree with our code styling and that's fine, but if you're going to send PRs, it should follow it.
You can always run eslint to check for any lint errors using `npm run lint:fix`