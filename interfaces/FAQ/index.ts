export type FAQData = {
	question: string;
	answer: string;
};

export interface FAQDetails {
	type: string;
	slug: string;
	data: FAQData[];
}
