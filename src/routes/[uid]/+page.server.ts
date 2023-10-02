export const prerender = true;

import type {Page} from "../../globalFeatherCMS/types/page";

export async function load() {

	const page: Page = {
		id: 1,
		sections: [
			{
				order: 0,
				id: "hero",
				settings: [
					{
						type: "text",
						id: "heading_text",
						label: "Heading Text",
						default: null,
						info: null,
						value: "This is a massive Heading!"
					}
				]
			},
			{
				order: 1,
				id: "paragraph",
				settings: [
					{
						type: "text",
						id: "heading_text",
						label: "Heading Text",
						default: null,
						info: null,
						value: "This is a massive Heading!"
					}
				]
			},
			{
				order: 2,
				id: "featured_products",
				settings: [
					{
						type: "text",
						id: "heading_text",
						label: "Heading Text",
						default: null,
						info: null,
						value: "This is a massive Heading!"
					}
				]
			}
		],
		meta: {
			title: "About Us",
			description: "aliqua cillum minim dolor sunt ea commodo Lorem proident do labore do consequat dolor sunt in sit non id dolore pariatur eu in veniam esse nulla aute sit do aute labore consequat culpa proident do",
			robots: "index, follow",
			marketingTags: null
		},
		slug: "/about"
	}

	return {
		page
	};
}
