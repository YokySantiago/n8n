import {
	INodeProperties
} from 'n8n-workflow';

export const workerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [ 'worker' ],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new Onfleet worker',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an Onfleet worker',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a specific Onfleet worker',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all Onfleet workers',
			},
			{
				name: 'Get Schedule',
				value: 'getSchedule',
				description: 'Get a specific Onfleet worker schedule',
			},
			{
				name: 'Set Worker\'s Schedule',
				value: 'setSchedule',
				description: 'Set the worker\'s schedule',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an Onfleet worker',
			},
		],
		default: 'get',
	},
];

const byLocationField = {
	displayName: 'Search By Location',
	name: 'byLocation',
	type: 'boolean',
	default: false,
	description: 'Whether searching workers who are currently within a certain target area or not',
} as INodeProperties;

const nameField = {
	displayName: 'Name',
	name: 'name',
	type: 'string',
	default: '',
	description: 'The worker\'s name',
} as INodeProperties;

const phoneField = {
	displayName: 'Phone',
	name: 'phone',
	type: 'string',
	default: '',
	description: 'A valid phone number as per the worker\'s organization\'s country',
} as INodeProperties;

const capacityField = {
	displayName: 'Capacity',
	name: 'capacity',
	type: 'number',
	default: 0,
	description: 'The maximum number of units this worker can carry, for route optimization purposes',
} as INodeProperties;

const displayNameField = {
	displayName: 'Display Name',
	name: 'displayName',
	type: 'string',
	default: '',
	description: 'This value is used in place of the worker\'s actual name within sms notifications, delivery tracking pages, and across organization boundaries',
} as INodeProperties;

const vehicleTypeField = {
	displayName: 'Type',
	name: 'type',
	type: 'options',
	options: [
		{
			name: 'Bicycle',
			value: 'BICYCLE',
		},
		{
			name: 'Car',
			value: 'CAR',
		},
		{
			name: 'Motorcycle',
			value: 'MOTORCYCLE',
		},
		{
			name: 'Truck',
			value: 'TRUCK',
		},
	],
	default: '',
	description: 'Whether the worker has vehicle or not. If it\'s not provided, this worker will be treated as if on foot.',
} as INodeProperties;

const vehicleDescriptionField = {
	displayName: 'Description',
	name: 'description',
	type: 'string',
	default: '',
	description: 'The vehicle\'s make, model, year, or any other relevant identifying details',
} as INodeProperties;

const vehicleLicensePlateField = {
	displayName: 'License Plate',
	name: 'licensePlate',
	type: 'string',
	default: '',
	description: 'The vehicle\'s license plate number',
} as INodeProperties;

const vehicleColorField = {
	displayName: 'Color',
	name: 'color',
	type: 'string',
	default: '',
	description: 'The vehicle\'s color',
} as INodeProperties;

const teamsField = {
	displayName: 'Teams',
	name: 'teams',
	type: 'multiOptions',
	typeOptions: {
		loadOptionsMethod: 'getTeams',
	},
	default: [],
	description: 'One or more teams of which the worker is a member',
} as INodeProperties;

const teamsFilterField = {
	displayName: 'Teams',
	name: 'teams',
	type: 'multiOptions',
	typeOptions: {
		loadOptionsMethod: 'getTeams',
	},
	default: [],
	description: 'A list of the teams that workers must be part of',
} as INodeProperties;

const statesFilterField = {
	displayName: 'States',
	name: 'states',
	type: 'multiOptions',
	options: [
		{
			name: 'Active (On-Duty, Active Task)',
			value: 2,
		},
		{
			name: 'Idle (On-Duty, No Active Task)',
			value: 1,
		},
		{
			name: 'Off-Duty',
			value: 0,
		},
	],
	default: [],
	description: 'List of worker states',
} as INodeProperties;

const phonesFilterField = {
	displayName: 'Phones',
	name: 'phones',
	type: 'string',
	typeOptions: {
		multipleValues: true,
		multipleValueButtonText: 'Add Phone',
	},
	default: [],
	description: 'A list of workers\' phone numbers',
} as INodeProperties;

const filterField = {
	displayName: 'List Of Fields To Return',
	name: 'filter',
	type: 'multiOptions',
	options: [
		{
			name: 'Account Status',
			value: 'accountStatus',
		},
		{
			name: 'Active Task',
			value: 'activeTask',
		},
		{
			name: 'Capacity',
			value: 'capacity',
		},
		{
			name: 'Delay Time',
			value: 'delayTime',
		},
		{
			name: 'Display Name',
			value: 'displayName',
		},
		{
			name: 'Image Url',
			value: 'imageUrl',
		},
		{
			name: 'Location',
			value: 'location',
		},
		{
			name: 'Metadata',
			value: 'metadata',
		},
		{
			name: 'Name',
			value: 'name',
		},
		{
			name: 'On Duty',
			value: 'onDuty',
		},
		{
			name: 'Organization',
			value: 'organization',
		},
		{
			name: 'Phone',
			value: 'phone',
		},
		{
			name: 'Tasks',
			value: 'tasks',
		},
		{
			name: 'Teams',
			value: 'teams',
		},
		{
			name: 'Time Created',
			value: 'timeCreated',
		},
		{
			name: 'Time Last Modified',
			value: 'timeLastModified',
		},
		{
			name: 'Time Last Seen',
			value: 'timeLastSeen',
		},
		{
			name: 'User Data',
			value: 'userData',
		},
		{
			name: 'Vehicle',
			value: 'vehicle',
		},
		{
			name: 'Worker ID',
			value: 'id',
		},
	],
	default: [],
	description: 'A list of fields to show in the response, if all are not desired',
} as INodeProperties;

const longitudeFilterField = {
	displayName: 'Longitude',
	name: 'longitude',
	type: 'number',
	typeOptions: {
		numberPrecision: 14,
	},
	default: 0,
	description: 'The longitude component of the coordinate pair',
} as INodeProperties;

const latitudeFilterField = {
	displayName: 'Latitude',
	name: 'latitude',
	type: 'number',
	typeOptions: {
		numberPrecision: 14,
	},
	default: 0,
	description: 'The latitude component of the coordinate pair',
} as INodeProperties;

const radiusFilterField = {
	displayName: 'Radius',
	name: 'radius',
	type: 'number',
	typeOptions: {
		maxValue: 10000,
		minValue: 0,
	},
	default: 1000,
	description: 'The length in meters of the radius of the spherical area in which to look for workers. Defaults to 1000 if missing. Maximum value is 10000.',
} as INodeProperties;

const scheduleDateField = {
	displayName: 'Date',
	name: 'date',
	type: 'dateTime',
	default: '',
	description: 'Schedule\'s date',
} as INodeProperties;

const scheduleTimezoneField = {
	displayName: 'Timezone',
	name: 'timezone',
	type: 'options',
	typeOptions: {
		loadOptionsMethod: 'getTimezones',
	},
	default: '',
	description: 'A valid timezone',
} as INodeProperties;

const scheduleStartField = {
	displayName: 'Start',
	name: 'start',
	type: 'dateTime',
	default: '',
	description: 'Start time',
} as INodeProperties;

const scheduleEndField = {
	displayName: 'End',
	name: 'end',
	type: 'dateTime',
	default: '',
	description: 'End time',
} as INodeProperties;

export const workerFields: INodeProperties[] = [
	{
		...byLocationField,
		required: true,
		displayOptions: {
			show: {
				resource: [ 'worker' ],
				operation: [ 'getAll' ],
			},
		},
	},
	{
		displayName: 'Worker ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ 'worker' ],
				operation: [
					'get',
					'getSchedule',
					'setSchedule',
					'update',
					'delete',
				],
			},
		},
		default: '',
		required: true,
		description: 'The ID of the worker object for lookup',
	},
	{
		...nameField,
		displayOptions: {
			show: {
				resource: [ 'worker' ],
				operation: [ 'create' ],
			},
		},
		required: true,
	},
	{
		...phoneField,
		displayOptions: {
			show: {
				resource: [ 'worker' ],
				operation: [ 'create' ],
			},
		},
		required: true,
	},
	{
		displayName: 'Vehicle',
		name: 'vehicle',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [ 'worker' ],
				operation: [ 'update' ],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Vehicle Properties',
				name: 'vehicleProperties',
				values: [
					{
						displayName: 'Additional Fields',
						name: 'additionalFields',
						type: 'collection',
						placeholder: 'Add Field',
						default: {},
						options: [
							{
								...vehicleTypeField,
								required: true,
							},
							{
								...vehicleDescriptionField,
								required: false,
							},
							{
								...vehicleLicensePlateField,
								required: false,
							},
							{
								...vehicleColorField,
								required: false,
							},
						],
					},
				],
			},
		],
	},
	{
		displayName: 'Vehicle',
		name: 'vehicle',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [ 'worker' ],
				operation: [ 'create' ],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Vehicle Properties',
				name: 'vehicleProperties',
				values: [
					{
						...vehicleTypeField,
						required: true,
					},
					{
						displayName: 'Additional Fields',
						name: 'additionalFields',
						type: 'collection',
						placeholder: 'Add Field',
						default: {},
						options: [
							{
								...vehicleDescriptionField,
								required: false,
							},
							{
								...vehicleLicensePlateField,
								required: false,
							},
							{
								...vehicleColorField,
								required: false,
							},
						],
					},
				],
			},
		],
	},
	{
		...teamsField,
		displayOptions: {
			show: {
				resource: [ 'worker' ],
				operation: [ 'create' ],
			},
		},
		required: true,
	},
	{
		...longitudeFilterField,
		displayOptions: {
			show: {
				resource: [ 'worker' ],
				operation: [ 'getAll' ],
				byLocation: [ true ],
			},
		},
		required: true,
	},
	{
		...latitudeFilterField,
		displayOptions: {
			show: {
				resource: [ 'worker' ],
				operation: [ 'getAll' ],
				byLocation: [ true ],
			},
		},
		required: true,
	},
	{
		displayName: 'Filter Fields',
		name: 'filterFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [ 'worker' ],
				operation: [ 'getAll' ],
				byLocation: [ true ],
			},
		},
		options: [ radiusFilterField ],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [ 'worker' ],
				operation: [ 'create' ],
			},
		},
		options: [
			capacityField,
			displayNameField,
		],
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [ 'worker' ],
				operation: [ 'update' ],
			},
		},
		options: [
			nameField,
			capacityField,
			displayNameField,
			teamsField,
		],
	},
	{
		displayName: 'Filter Fields',
		name: 'filterFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [ 'worker' ],
				operation: [ 'getAll' ],
				byLocation: [ false ],
			},
		},
		options: [
			filterField,
			teamsFilterField,
			statesFilterField,
			phonesFilterField,
		],
	},
	{
		displayName: 'Filter Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [ 'worker' ],
				operation: [ 'get' ],
			},
		},
		options: [
			{
				...filterField,
				required: false,
			},
			{
				displayName: 'Analytics',
				name: 'analytics',
				type: 'boolean',
				default: true,
				required: false,
				description: 'Whether a more detailed response is needed, includes basic worker duty event, traveled distance (meters) and time analytics',
			},
		],
	},
	{
		displayName: 'Schedule',
		name: 'schedule',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [ 'worker' ],
				operation: [ 'setSchedule' ],
			},
		},
		default: {},
		typeOptions: {
			multipleValues: true,
			multipleValueButtonText: 'Add Schedule',
		},
		options: [
			{
				displayName: 'Schedule Properties',
				name: 'scheduleProperties',
				default: {},
				values: [
					{
						...scheduleDateField,
						required: true,
					},
					{
						...scheduleTimezoneField,
						required: true,
					},
					{
						displayName: 'Shifts',
						name: 'shifts',
						type: 'fixedCollection',
						default: {},
						typeOptions: {
							multipleValues: true,
							multipleValueButtonText: 'Add Shift',
						},
						options: [
							{
								displayName: 'Shifts Properties',
								name: 'shiftsProperties',
								default: {},
								values: [
									{
										...scheduleStartField,
										required: true,
									},
									{
										...scheduleEndField,
										required: true,
									},
								],
							},
						],
					},
				],
			},
		],
	},
];
