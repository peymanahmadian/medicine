class LocalStorage{
    setValue(name,value){
        localStorage.setItem(name,value);
    }
    getValue(name){
        return localStorage.getItem(name);
    }
    deleteValue(name){
        localStorage.removeItem(name)
    }
}
export default new LocalStorage();