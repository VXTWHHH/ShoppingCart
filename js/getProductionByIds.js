function getProductionByIds(ids) {
    return new Promise((resolve, reject) => {
        getProductions((e, d) => {
            if (e) {
                reject(e);
                return;
            }

            const pData = d.filter(element => ids.includes(element.pid));
            resolve(pData);
        });
    });
}