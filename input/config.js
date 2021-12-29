const fs = require("fs");
const dir = __dirname;
const height = 500;
const width = 500;
const rarity = [
	{key: "", val: "original"},
	{key: "_s", val: "rare"},
	{key: "_sr", val: "super_rare"},
];

const addRarity = (_str) => {
	let itemRarity;
	rarity.forEach((r) => {
		if (_str.includes(r.key)) {
			itemRarity = r.val;
		}
	});
	return itemRarity
}

const cleanName = (_str) => {
	let name = _str.slice(0, -4);
	rarity.forEach((r) => {
		name = name.replace(r.key, "");
	});
	return name;
}
const getElem = (path) => {
	return fs
	.readdirSync(path)
	.filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
	.map((i, index) => {
		return {
			id: index + 1,
			name: cleanName(i),
			fileName: i,
			rarity: addRarity(i),
		};
	});
};

const layers = [
	{
	id: 1,
	name: "background",
	location: `${dir}/background/`,
	elements: getElem(`${dir}/background/`),
	position: { x: 0, y: 0 },
	size: { width: 500, height: 500},
	},
	{
	id: 2,
	name: "ball",
	location: `${dir}/ball/`,
	elements: getElem(`${dir}/ball/`),
	position: { x: 0, y: 0 },
	size: { width: 500, height: 500},
	},
	{
	id: 3,
	name: "globe",
	location: `${dir}/globe/`,
	elements: getElem(`${dir}/globe/`),
	position: { x: 0, y: 0 },
	size: { width: 500, height: 500},
	},
	{
	id: 4 ,
	name: "circle",
	location: `${dir}/circle/`,
	elements: getElem(`${dir}/circle/`),
	position: { x: 0, y: 0 },
	size: { width: 500, height: 500},
	},
];

module.exports = {layers, width, height};