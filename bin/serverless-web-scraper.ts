#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ServerlessWebScraperStack } from '../lib/serverless-web-scraper-stack';

const app = new cdk.App();
new ServerlessWebScraperStack(app, 'ServerlessWebScraperStack');
