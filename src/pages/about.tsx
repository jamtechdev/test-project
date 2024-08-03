import { letLayout } from "@/layouts/reverse"

function About() {
    return (
        <>
            <h3>Hello I am here about Page</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
                molestias fugit ut obcaecati doloremque dignissimos ad iste maiores delectus
                culpa repellendus repudiandae explicabo! Voluptatem, exercitationem dolores!
                Laboriosam quam dolores earum.
            </p>
        </>
    )
}
About.getLayout = letLayout;
export default About;