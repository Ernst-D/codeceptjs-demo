const _sharedStore = new Map();

module.exports = {
    get(key){
        return _sharedStore.get(key); 
    },
    set(key, value){
        return _sharedStore.set(key, value);
    },
    store(){
        return _sharedStore;
    }
};
