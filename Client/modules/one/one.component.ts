import { Component } from '@angular/core';

@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styles: [
    `.badge { cursor: pointer; }`
  ]
})
export class OneComponent {
    tabs: Array<any>
    testData = [
            { 
                "title": "Requests",
                "content": "Enamel pin mumblecore cliche poke, actually mixtape cray franzen knausgaard. Food truck post-ironic letterpress gastropub, irony chambray neutra. Raw denim activated charcoal sriracha 8-bit retro unicorn cray, letterpress austin meditation. Meditation yuccie echo park forage, viral man braid mustache you probably haven't heard of them chicharrones neutra. Activated charcoal chicharrones kombucha enamel pin. Pickled air plant hella, 3 wolf moon bicycle rights lo-fi flexitarian. Chillwave swag freegan PBR&B, selfies kale chips meggings tilde actually selvage iceland before they sold out pop-up typewriter.", 
                "buttons": [
                    { "title": "Save", "action": "doSave" },
                    { "title": "Delete", "action": "doDelete" },
                    { "title": "Update", "action": "doUpdate" }
                ]
            },
            { 
                "title": "Person",
                "content": "YOLO man braid twee lomo, mustache sartorial deep v. Venmo typewriter wayfarers yuccie sustainable gluten-free, DIY tote bag seitan semiotics hexagon. Cardigan VHS paleo readymade swag biodiesel. Chicharrones chia iceland keytar snackwave. Pickled aesthetic trust fund, you probably haven't heard of them semiotics whatever messenger bag flexitarian gluten-free squid copper mug cliche. Salvia air plant viral, four loko seitan 3 wolf moon af narwhal gentrify man bun. Poke locavore deep v, selvage art party direct trade chicharrones four dollar toast." 
            },
            { 
                "title": "Address",
                "content": "Master cleanse truffaut deep v twee. Messenger bag 3 wolf moon thundercats copper mug. Small batch stumptown four dollar toast, hammock iceland jean shorts slow-carb. Sriracha gluten-free echo park, man braid deep v typewriter pour-over gastropub offal vinyl ethical fashion axe. Everyday carry vexillologist ugh narwhal selvage, butcher air plant art party echo park actually paleo pok pok jean shorts truffaut. Fixie gastropub lyft brooklyn, raclette photo booth swag live-edge craft beer cornhole unicorn VHS vape pop-up master cleanse. Ethical cornhole cold-pressed kinfolk humblebrag.",
                "buttons": [
                    { "title": "Save", "action": "doSave" },
                    { "title": "Update", "action": "doUpdate" }
                ]
            },
            { 
                "title": "Task",
                "content": "Sartorial typewriter bespoke, la croix mustache quinoa gluten-free readymade tattooed drinking vinegar, raclette pabst aesthetic lomo green juice fanny pack synth edison bulb hammock migas pickled." 
            },{ 
                "title": "Place",
                "content": "Sartorial typewriter bespoke, la croix mustache quinoa gluten-free photo booth lo-fi you probably haven't heard of them craft beer plaid shabby chic meggings. Street art flannel jianbing, franzen leggings hashtag fashion axe lyft yr coloring book mustache. Raclette flannel actually authentic, forage ennui tousled banh mi small batch ethical cornhole jean shorts succulents selvage. Organic readymade tattooed drinking vinegar, raclette pabst aesthetic lomo green juice fanny pack synth edison bulb hammock migas pickled." 
            }
        ];

    constructor() { 
        this.tabs = [];
    }

    addTab(index: number) {
        this.tabs.push(this.testData[index] || {"title": 'Bunk Data'});
    }
}
