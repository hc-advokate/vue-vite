export default {
	"*.{ts,mts,cts,tsx,js,mjs,cjs,jsx}": ["eslint --cache --fix", "prettier --write"],
	"{!(package)*.json,*.code-snippets,.!{npm,browserslist}*rc.{js,cjs,mjs}}": ["prettier --write--parser json"],
	"*.json": ["prettier --write"],
	"*.vue": ["eslint --fix", "prettier --write"],
	"*.{css,scss,less,styl,html}": ["stylelint --cache --fix", "prettier --write"],
	"*.{md, mdx}": ["prettier --write"],
};
