## `spr` Overview

`spr` is a CLI tool for generating Markdown pages in the league Gatsby site for power rankings posts with Sleeper data injected.

## Build Status

[![Azure Pipelines](https://dev.azure.com/scottenriquez/Sleeper%20Power%20Rankings%20Markdown%20CLI/_apis/build/status/the-winner-is-a-tryhard.power-rankings-markdown-cli?branchName=master)](https://dev.azure.com/scottenriquez/Sleeper%20Power%20Rankings%20Markdown%20CLI/_build/latest?definitionId=5&branchName=master)

## Installation

Clone the repository, install NPM dependencies, and create a symlink in the global folder.

```shell script
git clone git@github.com:the-winner-is-a-tryhard/power-rankings-markdown-cli.git
cd power-rankings-markdown-cli
npm install
npm link
spr --version
```

## Usage

Navigate to the root folder of the league's Gatsby site, and run `spr add <WEEK_NUMBER> <AUTHOR>`.
