export interface _id {
	secondCategory: string;
}

export interface Page {
	alias: string;
	title: string;
	_id: string;
	category: string;
}

export interface RootObject {
	_id: _id;
	pages: Page[];
}