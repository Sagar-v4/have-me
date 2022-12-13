import {Button, Table} from 'antd';
import React, {useState} from 'react';
import {DownloadOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import AnchorLink from "antd/es/anchor/AnchorLink";

export default function Download() {

    const user = JSON.parse(localStorage.getItem("user"));

    return (

        <>
                <Button
                    href={"https://drive.google.com/drive/u/0/folders/1atWIGhGRNgLVCeNkoruq3rSt8q4h2ywj"}
                    target={"_blank"}
                    style={{
                        marginTop: "30%"
                    }}
                    type="primary link" icon={<DownloadOutlined />} >
                    Download Apk
                </Button>
        </>
    );
};

