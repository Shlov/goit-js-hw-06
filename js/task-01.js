const foo = () => {
    // var 1
    console.log(`Number of categories: ${document.querySelector('#categories').children.length}`);
    // var 2
    // console.log(`Number of categories: ${document.querySelectorAll('.item').length}`);
    
    for (const category of document.querySelectorAll('.item')) {
        // var 1
        console.log(`Category: ${category.firstElementChild.textContent}`)
        // var 2
        // console.log(`Category: ${category.querySelector('h2').textContent}`)
        // var 1
        console.log(`Elements: ${category.querySelectorAll('li').length}`)
        // var 2
        // console.log(`Elements: ${category.lastElementChild.children.length}`)
    }
}

foo ()
