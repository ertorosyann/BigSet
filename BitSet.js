class BitSet {
    constructor(){
        this.arr = new Array(Math.ceil(77000 / 64)).fill(0);
    }

    setBit(pos, value){
        let index = Math.floor(pos / 64);
        let reminder = pos % 64;
        let arr_bit = this.arr[index] & (1 << (64 - reminder));
         
        if ((Boolean(arr_bit) && value == 0) || (arr_bit == 0 && value === 1)) {
            this.arr[index] ^= Math.abs(1 << ( 64 -reminder));                        
        }
        
    }
    getBit(pos){
        let index = Math.floor(pos / 64);
        let reminder = pos % 64;
        let arr_bit = this.arr[index] & (1 << (64 - reminder));
        return Boolean(arr_bit);        
    }
}

let bigset = new BitSet();

bigset.setBit(1,1);
bigset.setBit(1,0);
console.log('case 1 = ', bigset.getBit(1));

bigset.setBit(77000,1);
console.log('case 2 = ', bigset.getBit(77000));
