import { Command } from '@oclif/core';
import chalk from 'chalk'


export default class MyCommand extends Command {
    async run() {
        this.log(chalk.red("Hello World"));
    }
}
