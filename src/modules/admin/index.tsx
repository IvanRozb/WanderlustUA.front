import {
    Admin,
    Create,
    EditGuesser,
    fetchUtils,
    ListGuesser,
    Resource,
    SimpleForm,
    TextInput
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import Link from "next/link";
import {makeStyles} from "@mui/styles";
import Box from "@mui/material/Box";
import useTokenCookies from "@/hooks/useTokenCookies";

const useStyles = makeStyles({
    toHome: {
        cursor: "pointer",
        zIndex: 10000000,
        position: "absolute",
        top: "90%",
        left: "3%"
    }
})

export default function AdminModule(){
    const classes = useStyles();
    const [{token}] = useTokenCookies()

    const httpClient = (url, options = {}) => {
        if (!options.headers) {
            options.headers = new Headers({ Accept: 'application/json' });
        }
        options.headers.set('Authorization', `Bearer ${token}`);
        return fetchUtils.fetchJson(url, options);
    };

    const dataProvider = jsonServerProvider('http://localhost:5199/api', httpClient);

    return <><Admin dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} edit={EditGuesser}/>
        <Resource name="tourist-place" list={ListGuesser} edit={EditGuesser} create={ <Create>
                <SimpleForm>
                  <TextInput source="Name" />
                    <TextInput source="Category" />
                    <TextInput source="Region" />
                    <TextInput source="Description" />
                </SimpleForm>
              </Create>}/>
    </Admin>
    <Link href={"/"}><Box className={classes.toHome}>{`To Home Page >>>`}</Box></Link>
    </>
}