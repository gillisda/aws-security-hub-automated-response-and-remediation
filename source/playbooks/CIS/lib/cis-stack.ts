/*****************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.   *
 *                                                                            *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may   *
 *  not use this file except in compliance with the License. A copy of the    *
 *  License is located at                                                     *
 *                                                                            *
 *      http://www.apache.org/licenses/LICENSE-2.0                            *
 *                                                                            *
 *  or in the 'license' file accompanying this file. This file is distributed *
 *  on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,        *
 *  express or implied. See the License for the specific language governing   *
 *  permissions and limitations under the License.                            *
 *****************************************************************************/
import * as cdk from '@aws-cdk/core';
import { PlaybookConstruct } from '../../core/lib/playbook-construct';

export interface CisStackProps {
    description: string;
    solutionId: string;
    solutionVersion: string;
    solutionDistBucket: string;
    solutionDistName: string;
    solutionName: string;
}

export class CisStack extends cdk.Stack {

    constructor(scope: cdk.Construct, id: string, props: CisStackProps) {
        super(scope, id, props);

        //---------------------------------------------------------------------
        // CIS1314
        //
        let cis1314findings = {
            "Title": [
                "1.3 Ensure credentials unused for 90 days or greater are disabled",
                "1.4 Ensure access keys are rotated every 90 days or less"
            ],
            "Workflow": {
                "Status": [
                    "NEW"
                ]
            }
        };

        const cis1314playbook = new PlaybookConstruct(this, 'cis1314playbook', {
            name: 'CIS1314',
            description: 'Remediates CIS 1.3 and CIS 1.4 by Deleting IAM Keys over 90 Days Old.',
            aws_region: this.region,
            aws_accountid: this.account,
            custom_action_name: 'CIS 1.3 & 1.4',
            findings: cis1314findings,
            solutionId: props.solutionId,
            solutionVersion: props.solutionVersion,
            solutionName: props.solutionName,
            distName: props.solutionDistName,
            distBucket: props.solutionDistBucket
        });

        //---------------------------------------------------------------------
        // CIS15111
        //
        let cis15111findings = {
              "Title": [
                "1.5 Ensure IAM password policy requires at least one uppercase letter",
                "1.6 Ensure IAM password policy requires at least one lowercase letter",
                "1.7 Ensure IAM password policy requires at least one symbol",
                "1.8 Ensure IAM password policy requires at least one number",
                "1.9 Ensure IAM password policy requires minimum password length of 14 or greater",
                "1.10 Ensure IAM password policy prevents password reuse",
                "1.11 Ensure IAM password policy expires passwords within 90 days or less"
              ],
              "Workflow": {
                "Status": [
                  "NEW"
                ]
              }
            };

        const cis15111playbook: PlaybookConstruct = new PlaybookConstruct(this, 'cis15111playbook', {
            name: 'CIS15111',
            description: 'Remediates CIS 1.5 to 1.11 by establishing a CIS compliant strong password policy.',
            aws_region: this.region,
            aws_accountid: this.account,
            custom_action_name: 'CIS 1.5 - 1.11',
            findings: cis15111findings,
            solutionId: props.solutionId,
            solutionVersion: props.solutionVersion,
            solutionName: props.solutionName,
            distName: props.solutionDistName,
            distBucket: props.solutionDistBucket
        });

        //---------------------------------------------------------------------
        // CIS22
        //
        let cis22findings = {
          "Title": [
            "2.2 Ensure CloudTrail log file validation is enabled"
          ],
          "Workflow": {
            "Status": [
              "NEW"
            ]
          }
        };

        const cis22playbook: PlaybookConstruct = new PlaybookConstruct(this, 'cis22playbook', {
            name: 'CIS22',
            description: 'Remediates CIS 2.2 by enabling CloudTrail log file validation.',
            aws_region: this.region,
            aws_accountid: this.account,
            custom_action_name: 'CIS 2.2',
            findings: cis22findings,
            solutionId: props.solutionId,
            solutionVersion: props.solutionVersion,
            solutionName: props.solutionName,
            distName: props.solutionDistName,
            distBucket: props.solutionDistBucket
        });

        //---------------------------------------------------------------------
        // CIS23
        //
        let cis23findings = {
            "Title": [
                "2.3 Ensure the S3 bucket used to store CloudTrail logs is not publicly accessible"
            ],
            "Workflow": {
                "Status": [
                    "NEW"
                ]
            }
        };

        const cis23playbook: PlaybookConstruct = new PlaybookConstruct(this, 'cis23playbook', {
            name: 'CIS23',
            description: 'Remediates CIS 2.3 by making CloudTrail log bucket private.',
            aws_region: this.region,
            aws_accountid: this.account,
            custom_action_name: 'CIS 2.3',
            findings: cis23findings,
            solutionId: props.solutionId,
            solutionVersion: props.solutionVersion,
            solutionName: props.solutionName,
            distName: props.solutionDistName,
            distBucket: props.solutionDistBucket
        });

        //---------------------------------------------------------------------
        // CIS24
        //
        let cis24findings = {
            "Title": [
                "2.4 Ensure CloudTrail trails are integrated with CloudWatch Logs"
            ],
            "Workflow": {
                "Status": [
                    "NEW"
                ]
            }
        };

        const cis24playbook: PlaybookConstruct = new PlaybookConstruct(this, 'cis24playbook', {
            name: 'CIS24',
            description: 'Remediates CIS 2.4 by enabling CloudWatch logging for CloudTrail.',
            aws_region: this.region,
            aws_accountid: this.account,
            custom_action_name: 'CIS 2.4',
            findings: cis24findings,
            solutionId: props.solutionId,
            solutionVersion: props.solutionVersion,
            solutionName: props.solutionName,
            distName: props.solutionDistName,
            distBucket: props.solutionDistBucket
        });

        //---------------------------------------------------------------------
        // CIS26
        //
        let cis26findings = {
            "Title": [
                "2.6 Ensure S3 bucket access logging is enabled on the CloudTrail S3 bucket"
            ],
            "Workflow": {
                "Status": [
                    "NEW"
                ]
            }
        };

        const cis26playbook: PlaybookConstruct = new PlaybookConstruct(this, 'cis26playbook', {
            name: 'CIS26',
            description: 'Remediates CIS 2.6 enabling Access Logging on CloudTrail logs bucket.',
            aws_region: this.region,
            aws_accountid: this.account,
            custom_action_name: 'CIS 2.6',
            findings: cis26findings,
            solutionId: props.solutionId,
            solutionVersion: props.solutionVersion,
            solutionName: props.solutionName,
            distName: props.solutionDistName,
            distBucket: props.solutionDistBucket
        });

        //---------------------------------------------------------------------
        // CIS28
        //
        let cis28findings = {
            "Title": [
                "2.8 Ensure rotation for customer created CMKs is enabled"
            ],
            "Workflow": {
                "Status": [
                    "NEW"
                ]
            }
        };

        const cis28playbook: PlaybookConstruct = new PlaybookConstruct(this, 'cis28playbook', {
            name: 'CIS28',
            description: 'Remediates CIS 2.8 by enabling customer CMK key rotation.',
            aws_region: this.region,
            aws_accountid: this.account,
            custom_action_name: 'CIS 2.8',
            findings: cis28findings,
            solutionId: props.solutionId,
            solutionVersion: props.solutionVersion,
            solutionName: props.solutionName,
            distName: props.solutionDistName,
            distBucket: props.solutionDistBucket
        });

        //---------------------------------------------------------------------
        // CIS29
        //
        let cis29findings = {
            "Title": [
                "2.9 Ensure VPC flow logging is enabled in all VPCs"
            ],
            "Workflow": {
                "Status": [
                    "NEW"
                ]
            }
        };

        const cis29playbook: PlaybookConstruct = new PlaybookConstruct(this, 'cis29playbook', {
            name: 'CIS29',
            description: 'Remediates CIS 2.9 enabling VPC flow logging in all VPCs.',
            aws_region: this.region,
            aws_accountid: this.account,
            custom_action_name: 'CIS 2.9',
            findings: cis29findings,
            solutionId: props.solutionId,
            solutionVersion: props.solutionVersion,
            solutionName: props.solutionName,
            distName: props.solutionDistName,
            distBucket: props.solutionDistBucket
        });

        //---------------------------------------------------------------------
        // CIS4142
        //
        let cis4142findings = {
          "Title": [
            "4.1 Ensure no security groups allow ingress from 0.0.0.0/0 to port 22",
            "4.2 Ensure no security groups allow ingress from 0.0.0.0/0 to port 3389"
          ],
          "Workflow": {
            "Status": [
              "NEW"
            ]
          }
        };

        const cis4142playbook: PlaybookConstruct = new PlaybookConstruct(this, 'cis4142playbook', {
            name: 'CIS4142',
            description: 'Remediates CIS 4.1 and 4.2 by disallowing global ingress on port 22 and 3389.',
            aws_region: this.region,
            aws_accountid: this.account,
            custom_action_name: 'CIS 4.1 & 4.2',
            findings: cis4142findings,
            solutionId: props.solutionId,
            solutionVersion: props.solutionVersion,
            solutionName: props.solutionName,
            distName: props.solutionDistName,
            distBucket: props.solutionDistBucket
        });

        //---------------------------------------------------------------------
        // CIS43
        //
        let cis43findings = {
            "Title": [
                "4.3 Ensure the default security group of every VPC restricts all traffic"
            ],
            "Workflow": {
                "Status": [
                    "NEW"
                ]
            }
        };

        const cis43playbook: PlaybookConstruct = new PlaybookConstruct(this, 'cis43playbook', {
            name: 'CIS43',
            description: 'Remediates CIS 4.3 by removing all rules from a default security group.',
            aws_region: this.region,
            aws_accountid: this.account,
            custom_action_name: 'CIS 4.3',
            findings: cis43findings,
            solutionId: props.solutionId,
            solutionVersion: props.solutionVersion,
            solutionName: props.solutionName,
            distName: props.solutionDistName,
            distBucket: props.solutionDistBucket
        });
    }
}
