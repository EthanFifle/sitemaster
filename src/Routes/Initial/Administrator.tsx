import { Routes, Route, Navigate } from 'react-router-dom';

import Sites from '../Admin/Sites';
import CreateSite from "../Admin/CreateSite";
import Settings from '../Admin/Settings';
import Access from '../Admin/Access';

const AdministratorPage = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate replace to="sites" />} />
                <Route path="sites" element={<Sites />} />
                <Route path="sites/generate" element={<CreateSite />} />
                <Route path="access" element={<Access />} />
                <Route path="settings" element={<Settings />} />
            </Routes>

        </>

    );
};

export default AdministratorPage;
