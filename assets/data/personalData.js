const personalData = [
    {
        id: "1",
        name: "Raldin D. Hidalgo",
        birthdate: "11/20/1987",
        picture: require('@resource/images/raldin.jpg'),
        country: "Dominican Republic",
        education: [{
            id: "1",
            Collage: "Western Michigan University",
            Mayor: "Computer Science",
            year:"2014"
            }
        ],
        skills: [
            {
                id: "1",
                skillname: "HMTL",
                image: require('@resource/images/html5.png'),			
            },
            {
                id: "2",
                skillname: "CSS3",
                image:  require('@resource/images/css3.png'),			
            },
            {
                id: "3",
                skillname: "JS",
                image:  require('@resource/images/js.png'),
            },
            {
                id: "4",
                skillname: "NodeJS",
                image:  require('@resource/images/nodejs.png'),			
            },
            {
                id: "5",
                skillname: "React",
                image:  require('@resource/images/react.png'),
            },
            {
                id: "6",
                skillname: ".NET",
                image:  require('@resource/images/netcore.png'),			
            },
            {
                id: "7",
                skillname: "C#",
                image:  require('@resource/images/csharp.png'),			
            },
            {
                id: "8",
                skillname: "SQL Server",
                image:  require('@resource/images/sql.png'),
            },
            {
                id: "9",
                skillname: "Oracle",
                image:  require('@resource/images/oracle.png'),
            },
            {
                id: "10",
                skillname: "MongoDB",
                image:  require('@resource/images/mongodb.png'),
            },
        ],
        project: [
            {
                id: "1",
                name: "Elecciones",
                description: "Mobile app to teach people how to do electronic votes."
            },
            {
                id: "2",
                name: "Approvata",
                description: "Website for a talent recruter."
            },
            {
                id: "3",
                name: "Cafeteria App",
                description: "Mobile app for an small cafeteria."
            },
            {
                id: "4",
                name: "Appmacena",
                description: "Mobile app to rent space for storage."
            },
            {
                id: "5",
                name: "Inventory App",
                description: "Creating an inventory app for the chocolate store confections with convictions."
            }
        ]
    }
];

export default personalData;