import {
	INodeProperties
} from 'n8n-workflow';
import { webhookMapping } from '../WebhookMapping';

export const webhookOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [ 'webhook' ],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new Onfleet webhook',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an Onfleet webhook',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all Onfleet webhooks',
			},
		],
		default: 'getAll',
	},
];

const urlField = {
	displayName: 'Url',
	name: 'url',
	type: 'string',
	default: '',
	description: 'The URL that Onfleet should issue a request against as soon as the trigger condition is met. It must be HTTPS and have a valid certificate.',
} as INodeProperties;

const nameField = {
	displayName: 'Name',
	name: 'name',
	type: 'string',
	default: '',
	description: 'A name for the webhook for identification',
} as INodeProperties;

const triggerField = {
	displayName: 'Trigger',
	name: 'trigger',
	type: 'options',
	options: Object.keys(webhookMapping).map((name, value) => {
		return { name, value };
	}),
	default: '',
	description: 'The number corresponding to the trigger condition on which the webhook should fire',
} as INodeProperties;

const thresholdField = {
	displayName: 'Threshold',
	name: 'threshold',
	type: 'number',
	default: 0,
	description: 'For trigger Task Eta, the time threshold in seconds; for trigger Task Arrival, the distance threshold in meters',
} as INodeProperties;

export const webhookFields: INodeProperties[] = [
	{
		displayName: 'Webhook ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ 'webhook' ],
				operation: [ 'delete' ],
			},
		},
		default: '',
		required: true,
		description: 'The ID of the webhook object for lookup',
	},
	{
		...urlField,
		displayOptions: {
			show: {
				resource: [ 'webhook' ],
				operation: [ 'create' ],
			},
		},
		required: true,
	},
	{
		...nameField,
		displayOptions: {
			show: {
				resource: [ 'webhook' ],
				operation: [ 'create' ],
			},
		},
		required: true,
	},
	{
		...triggerField,
		displayOptions: {
			show: {
				resource: [ 'webhook' ],
				operation: [ 'create' ],
			},
		},
		required: true,
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [ 'webhook' ],
				operation: [ 'create' ],
			},
		},
		options: [ thresholdField ],
	},
];
