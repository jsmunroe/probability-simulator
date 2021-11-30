export function number(min, max) {
    if (!max) {
        max = min;
        min = 0;
    }

    const range = [Math.min(min, max), Math.max(min, max) + 1];
    min = range[0];
    max = range[1];

    return Math.floor(Math.random() * (max - min)) + min;
}


export function set(options) {
    options = {...{
        size: undefined,
        minSize: 1, 
        maxSize: 10,
        sizeModulo: 1,
        setItem: i => 0,
        shuffle: false,
    }, ...options};

    let size = options.size ? options.size : number(options.minSize, options.maxSize);
    if (size % options.sizeModulo !== 0) {
        size += (size % options.sizeModulo);
    }

    const set = [...Array(size).keys()].map(options.setItem);

    if (options.shuffle) {
        return shuffle(set);
    }

    return set;
}

export function chooseWhere(set, predicate) {
    let pairs = set.map((e,i) => ({e,i}));

    if (typeof predicate === "function") {
        pairs = pairs.filter(p => predicate(p.e, p.i));
    }

    const indices = pairs.map(p => p.i);
    const [index] = choose(indices)

    return [set[index], set.filter((e,i) => i !== index)];
}

export function choose(set) {
    const index = number(0, set.length - 1);

    return [set[index], set.filter((e,i) => i !== index)];
}

export function shuffle(set) {
    set = [...set];
    let result = [];

    while (set.length > 1) {
        const [chosen, reducedSet] = choose(set);
        result = [...result, chosen];
        set = reducedSet;
    }

    return result;
}