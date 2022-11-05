import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'phones'},
            {id: 2, name: 'TVs'}
        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'}
        ]
        this._devices = [
            {id: 1, name: 'iPhone 4', price: 500, rating: 5, image: 'https://media.istockphoto.com/id/1364620309/photo/iphone-13-pro.jpg?s=1024x1024&w=is&k=20&c=jFnbznulZpNyTXl9I-tqZAmMJzs5MUrNDp5EIdoB7AE='},
            {id: 2, name: 'iPhone 5', price: 500, rating: 5, image: 'https://media.istockphoto.com/id/1364620309/photo/iphone-13-pro.jpg?s=1024x1024&w=is&k=20&c=jFnbznulZpNyTXl9I-tqZAmMJzs5MUrNDp5EIdoB7AE='},
            {id: 2, name: 'iPhone 5', price: 500, rating: 5, image: 'https://media.istockphoto.com/id/1364620309/photo/iphone-13-pro.jpg?s=1024x1024&w=is&k=20&c=jFnbznulZpNyTXl9I-tqZAmMJzs5MUrNDp5EIdoB7AE='},
            {id: 2, name: 'iPhone 5', price: 500, rating: 5, image: 'https://media.istockphoto.com/id/1364620309/photo/iphone-13-pro.jpg?s=1024x1024&w=is&k=20&c=jFnbznulZpNyTXl9I-tqZAmMJzs5MUrNDp5EIdoB7AE='},
            {id: 2, name: 'iPhone 5', price: 500, rating: 5, image: 'https://media.istockphoto.com/id/1364620309/photo/iphone-13-pro.jpg?s=1024x1024&w=is&k=20&c=jFnbznulZpNyTXl9I-tqZAmMJzs5MUrNDp5EIdoB7AE='},
            {id: 2, name: 'iPhone 5', price: 500, rating: 5, image: 'https://media.istockphoto.com/id/1364620309/photo/iphone-13-pro.jpg?s=1024x1024&w=is&k=20&c=jFnbznulZpNyTXl9I-tqZAmMJzs5MUrNDp5EIdoB7AE='},
            {id: 2, name: 'iPhone 5', price: 500, rating: 5, image: 'https://media.istockphoto.com/id/1364620309/photo/iphone-13-pro.jpg?s=1024x1024&w=is&k=20&c=jFnbznulZpNyTXl9I-tqZAmMJzs5MUrNDp5EIdoB7AE='},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this.devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
}

