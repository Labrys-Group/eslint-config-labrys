# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue or Slack.

## Pull Request Process

1. Ensure that the config works as expected in a fresh project. For this I suggest creating a new Next.js project `yarn create next-app --typescript` and using [yalc](https://github.com/wclr/yalc) to add your local version of the config to the project. If eslint is not behaving as expected, see its logs in the `OUTPUT` tab next to VSCode's `TERMINAL`, then select `ESLint` from the dropdown on the right.
2. Update the README.md with any required changes.
3. Increase the version numbers in `package.json` to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. Create a Pull Request using the standard Labrys template.
5. You may merge the Pull Request in once you have approval of the Tech Lead.
6. Checkout `main` and run the `np` command to deploy to `npm`.
