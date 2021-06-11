import { gql } from '@apollo/client';

export const GET_PAGE_BY_URI = gql`
	query getPageByURI($uri: String!) {
		pageBy(uri: $uri) {
			title
			seo {
				metaDesc
				metaKeywords
				canonical
				title
			}
			content
		}
	}
`;

export const GET_SHOW_CASE_BLOGS = gql`
	query getBlogsForShowcase($count: Int!) {
		posts(first: $count, where: { orderby: { field: DATE, order: DESC } }) {
			nodes {
				slug
				title
				date
				featuredImage {
					node {
						altText
						sourceUrl
						mediaDetails {
							width
							height
						}
					}
				}
				categories {
					nodes {
						name
					}
				}
				readingTime {
					readtime
				}
			}
			pageInfo {
				total
			}
		}
	}
`;

export const GET_TOTAL_BLOGS_COUNT = gql`
	query totalBlogsCount {
		posts {
			pageInfo {
				total
			}
		}
	}
`;

export const GET_BLOGS_DATA_FOR_SITEMAP = gql`
	query getALlSLugsForSitemap($size: Int!) {
		posts(
			where: {
				orderby: { field: DATE, order: DESC }
				offsetPagination: { offset: 0, size: $size }
			}
		) {
			nodes {
				slug
				date
			}
		}
	}
`;

export const GET_ALL_SLUGS = gql`
	query getAllSlugs {
		posts {
			nodes {
				slug
			}
		}
	}
`;

export const GET_BLOG_BY_SLUG = gql`
	query getBlogBySlug($slug: String!) {
		postBy(slug: $slug) {
			author {
				node {
					lastName
					firstName
				}
			}
			title
			slug
			content
			excerpt
			seo {
				metaDesc
				metaKeywords
				title
			}
			featuredImage {
				node {
					altText
					sourceUrl
					mediaDetails {
						width
						height
					}
				}
			}
			seoMetaTags {
				keywords
			}
			relatedPosts {
				nodes {
					title
					slug
					categories {
						nodes {
							name
						}
					}
					readingTime {
						readtime
					}
					featuredImage {
						node {
							altText
							sourceUrl
							mediaDetails {
								width
								height
							}
						}
					}
				}
			}
		}
	}
`;

export const GET_BLOGS_FOR_HOME = gql`
	query getBlogsForHome {
		posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
			nodes {
				date
				featuredImage {
					node {
						altText
						mediaDetails {
							width
							height
						}
						sourceUrl
					}
				}
				slug
				title
			}
		}
	}
`;

export const GET_FILTERED_BLOGS = gql`
	query getFilteredBlogsBy($value: String!) {
		posts(
			where: {
				metaQuery: {
					metaArray: { compare: EQUAL_TO, key: "filterBy", value: $value }
				}
				orderby: { field: DATE, order: DESC }
			}
			first: 3
		) {
			nodes {
				slug
				title
				categories {
					nodes {
						name
					}
				}
				readingTime {
					readtime
				}
			}
		}
	}
`;

export const GET_PAGINATED_BLOGS = gql`
	query getPaginatedBlogs($offsetValue: Int!) {
		posts(
			where: {
				offsetPagination: { offset: $offsetValue, size: 6 }
				orderby: { field: DATE, order: DESC }
			}
		) {
			nodes {
				slug
				title
				featuredImage {
					node {
						altText
						sourceUrl
						mediaDetails {
							width
							height
						}
					}
				}
				categories {
					nodes {
						name
					}
				}
				readingTime {
					readtime
				}
			}
			pageInfo {
				total
			}
		}
	}
`;
