import { QueryBuilderAntD, AntDValueSelector, AntDValueEditor } from '@react-querybuilder/antd';
import React from "react";
import type { FieldSelectorProps, CombinatorSelectorProps, ValueEditorProps } from "react-querybuilder";
import { QueryBuilder, formatQuery } from 'react-querybuilder';

export default function Home() {
    const MyAntDFieldSelector = (props: FieldSelectorProps | CombinatorSelectorProps ) => {
        return (
            <AntDValueSelector
                {...props}
                getPopupContainer={(e) => e.parentElement as HTMLElement} />
        );
    };

    const MyAntDValueSelector = (props: ValueEditorProps) => {
        if ((props.type === 'select' || props.type === 'multiselect') && props.inputType === 'text') {
            return (
                <AntDValueSelector
                    options={props.fieldData.values || []}
                    {...props}
                    mode={props.type === 'multiselect' ? 'multiple' : undefined }
                    getPopupContainer={(e) => e.parentElement as HTMLElement} />
            );
        } else {
            return (<AntDValueEditor {...props} />);
        }
    };

    return (
        <QueryBuilderAntD>
            <QueryBuilder
                showNotToggle
                controlElements={{
                    fieldSelector: MyAntDFieldSelector,
                    operatorSelector: MyAntDFieldSelector,
                    combinatorSelector: MyAntDFieldSelector,
                    valueEditor: MyAntDValueSelector,
                }}

                controlClassnames={{
                    fields: 'TEST',
                }}
                fields={[
                    { name: 'firstName', label: 'First Name' },
                    { name: 'lastName', label: 'Last Name' },
                ]}
                onQueryChange={(query) => {
                    console.debug(formatQuery(query, 'sql'));
                }}
            />
        </QueryBuilderAntD>
    );
}
