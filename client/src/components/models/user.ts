export class User {

    id!: number | null;
    name!: string | null;
    username!: string | null;
    email!: string | null;
    address!: object | null;
    phone!: string | null;
    website!: string | null;
    company!: object | null;

    constructor() {
        this.id = null;
        this.name = null;
        this.username = null;
        this.email = null;
        this.address = null;
        this.phone = null;
        this.website = null;
        this.company = null;
    }

    // Column definitions need to be set for the ag-grid table.
    private userColumnDefinitions = [
        {
            headerName: "Name",
            field: "name",
            resizable: true,
            sortable: true
        },
        {
            headerName: "Username",
            field: "username",
            resizable: true,
            sortable: true
        },
        {
            headerName: "Email",
            field: "email",
            resizable: true,
            sortable: true
        },
        {
            headerName: "Website",
            field: "website",
            resizable: true,
            sortable: true
        },
        /*{
            headerName: 'Photo',
            width: 125,
            resizable: true,
            cellRendererFramework: CarTableActions
        }*/
    ];

    // Returns the column definitions.
    public getUserColumnDefinitions() {
        return this.userColumnDefinitions;
    }

}
