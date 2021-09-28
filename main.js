const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = ( () => {
    const courses = ['Javascript'];

    const root = $('.root');
    const input = $('.input');
    const button = $('.submit');

    return {
        add(course) {
            courses.push(course);
        },
        delete(index) {
            courses.splice(index,1);
        },
        render() {
            const html = courses.map((course, index) => {
                return `
                   <li>
                    ${course}
                    <span class="deleteCourse" data-index="${index}">&times</span>
                   </li> 
                `
            }).join('');

            root.innerHTML = html;
        },
        handleDelete(e){
            const isClassDeleteCourse = e.target.closest('.deleteCourse');
            if( isClassDeleteCourse ){
                const index = e.target.dataset.index;
                this.delete(index);
                this.render();
            }

        },
        init() {
            // Handle DOM events
            button.onclick = () =>{
                this.add(input.value);
                this.render();

                input.value = '';
                input.focus();
            };

            root.onclick = this.handleDelete.bind(this);


            this.render();
        }

    }
})();

app.init();
