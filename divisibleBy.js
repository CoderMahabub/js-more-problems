for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foobar');
    }
    else if (i % 5 == 0) {
        console.log('bar');
    }
    else if (i % 3 == 0) {
        console.log('foo')
    }
    //এখানে এই কন্ডিশন ইউস করলে এটা পাওয়ার আগেই কন্ডিশন শেষ হয়ে //যায় এজন্য উপরে নিয়ে এটায় আগে রাখা হইছে।
    // else if(i % 3 == 0 && i % 5 == 0){
    //     console.log('foobar');
    // }
    else {
        console.log(i);
    }
}
