// const functions = [
// 	() => new Promise(res => setTimeout(res, 300)),
// 	() => new Promise(res => setTimeout(res, 400)),
// 	() => new Promise(res => setTimeout(res, 200))
// ];

const promisePool = async (functions, n) => {
	const evaluateNext = async () => functions.shift()?.().then(evaluateNext);

	await Promise.all(Array(n).fill().map(evaluateNext));
};

const sleep = (t) => new Promise(res => setTimeout(res, t));
promisePool([() => sleep(500), () => sleep(400)], 1).then(console.log);