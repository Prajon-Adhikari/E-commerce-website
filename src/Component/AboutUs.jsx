import React from "react";
import meeting1 from "../assets/meeting.webp";
import meeting2 from "../assets/meeting2.webp";
import person1 from "../assets/person1.jpeg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";

export default function AboutUs() {
  return (
    <div>
      <div className="aboutus-contents">
        <h2>ABOUT US</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus explicabo ratione ut, hic, placeat eum dolor obcaecati,
          laboriosam corporis quo eaque? Autem incidunt assumenda dicta quae
          sunt, ullam et illum nulla, deserunt laborum minus dignissimos impedit
          accusantium. Alias, officiis suscipit eaque adipisci voluptas laborum
          sit voluptatibus doloribus modi quas deleniti obcaecati maiores, neque
          praesentium provident itaque, repudiandae ab ipsam ipsum. Magni, vero!
          Autem veritatis similique aut at, consequatur sint animi molestiae
          explicabo mollitia unde et sapiente nesciunt ipsum, ad, officiis
          quidem modi ut voluptas a vero omnis dolorum. Nostrum quos beatae
          cumque molestiae, maxime deserunt, harum, voluptatum nihil quo dolor
          porro inventore. Consectetur iusto, molestiae vitae officia explicabo
          quas esse amet repellat! Laborum maiores assumenda error reiciendis ex
          distinctio maxime, magni cum atque rem veniam tempore ad dolore
          officia laboriosam quas expedita nemo ipsa quisquam ullam. Doloribus
          libero incidunt aliquid officiis nostrum ullam mollitia vero dicta
          eius possimus explicabo, ab sunt culpa voluptate quae ipsum amet enim
          corporis quidem itaque dolores distinctio modi. Dolores temporibus
          dicta accusantium, a delectus labore rem dolor explicabo
          necessitatibus impedit. Quo quis eos ratione quia? Atque officiis,
          eveniet mollitia dicta fugiat hic itaque quos, ut doloribus natus cum,
          consequuntur numquam quam earum nesciunt minima excepturi.
        </p>
      </div>
      <div className="meeting-contents">
        <div className="meeting-image">
          <img src={meeting1} alt="" />
          <img src={meeting2} alt="" />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quia
          fuga ea vitae, porro ullam numquam magni! Sed nobis pariatur sequi
          dolor accusantium maxime quaerat commodi id blanditiis deserunt
          facilis corporis, voluptates tenetur aspernatur quasi architecto
          praesentium voluptatem, debitis, at aliquam aut saepe ex ratione
          tempora. Vero magnam quia magni.
        </p>
      </div>
      <div className="teams-container">
        <h2>OUR TEAMS</h2>
        <div className="teams">
          <div className="person-pic-container">
            <img src={person1} alt="" />
            <p>Manager</p>
          </div>
          <div className="person-pic-container">
            <img src={person2} alt="" />
            <p>Sales Manager</p>
          </div>
          <div className="person-pic-container">
            <img src={person3} alt="" />
            <p>Executive Head</p>
          </div>
          <div className="person-pic-container">
            <img src={person4} alt="" />
            <p>Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
