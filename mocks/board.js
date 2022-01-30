export default {
  backgroundColor: '#f5c4c4',
    columns: [{
        id: 1,
        name:'Backlog',
        backgroundColor:'#fafafa',
        tasks:
        [
            {
                id: 1,
                header: 'Buy some stuff',
                epics: [
                    1,
                    2
                ],
                skills: [
                    1
                ],
            },
            {
                id: 2,
                header: 'Buy some other stuff',
                description: 'very important',
                dueDate: '2022-04-02',
                epics: [],
                skills: [],
            }
        ]
    },
        {
            id: 2,
            name:'To DO',
            backgroundColor:'violet',
            tasks:
                [
                    {
                        id: 3,
                        header: 'Buy some bread',
                        epics: [
                            1,
                            2
                        ],
                        skills: [
                            1
                        ],
                    },
                ]
        },
    ],
    skills: [
        { id: 1, name: 'Shopping' },
    ],
    epics: [
        { id: 1, name: 'Home', color: 'green' },
        { id: 2, name: 'Buy', color: 'red' }
    ]
}
