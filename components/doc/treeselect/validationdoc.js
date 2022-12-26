import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { NodeService } from '../../../service/NodeService';
import { Button } from '../../lib/button/Button';
import { TreeSelect } from '../../lib/treeselect/TreeSelect';
import { classNames } from '../../lib/utils/Utils';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ValidationDoc(props) {
    const [formData, setFormData] = useState({});
    const [nodes, setNodes] = useState(null);
    const defaultValues = { node: null };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSubmit = (data) => {
        setFormData(data);
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error ml-2">{errors[name].message}</small>;
    };

    const code = {
        basic: `
<Controller name="node"  control={form.control} rules={{ required: 'Node is required.'}}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}>Node*</label>
            <TreeSelect id={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} options={nodes} placeholder="Select Item" className={classNames({ 'p-invalid': fieldState.error })} />
            {getFormErrorMessage(field.name)}
        </>
    )}
/>
        `,
        javascript: `
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { TreeSelect } from "primereact/treeselect";

export default function ValidationDemo() {
    const [formData, setFormData] = useState({});
    const [nodes, setNodes] = useState(null);
    const defaultValues = { node: null };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;
    

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSubmit = (data) => {
        setFormData(data);
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error ml-2">{errors[name].message}</small>
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2 md:w-20rem w-full">
                <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
                    <div className="field">
                        <Controller
                            name="node"
                            control={form.control}
                            rules={{ required: 'Node is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames('mr-2', { 'p-error': errors.node })}>
                                        Node*
                                    </label>
                                    <TreeSelect id={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} options={nodes} placeholder="Select Item" className={classNames({ 'p-invalid': fieldState.error })} />
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />
                    </div>
                    <Button label="Submit" type="submit" icon="pi pi-check" />
                </form>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { TreeSelect } from "primereact/treeselect";
import { classNames } from 'primereact/utils';

export default function InvalidDemo() {
    const [formData, setFormData] = useState<any>({});
    const [nodes, setNodes] = useState<any[]>(null);
    const defaultValues = { node: null };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;
    

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSubmit = (data: any) => {
        setFormData(data);
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error ml-2">{errors[name].message}</small>
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2 md:w-20rem w-full">
                <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
                    <div className="field">
                        <Controller
                            name="node"
                            control={form.control}
                            rules={{ required: 'Node is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames('mr-2', { 'p-error': errors.node })}>
                                        Node*
                                    </label>
                                    <TreeSelect id={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} options={nodes} placeholder="Select Item" className={classNames({ 'p-invalid': fieldState.error })} />
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />
                    </div>
                    <Button label="Submit" type="submit" icon="pi pi-check" />
                </form>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <a href="https://react-hook-form.com/">React Hook Form</a> is the most popular React library for form validation. The field will be highlighted and receive focus on validation failure.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="flex flex-column gap-2 md:w-20rem w-full">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
                        <div className="field">
                            <Controller
                                name="node"
                                control={form.control}
                                rules={{ required: 'Node is required.' }}
                                render={({ field, fieldState }) => (
                                    <>
                                        <label htmlFor={field.name} className={classNames('mr-2', { 'p-error': errors.node })}>
                                            Node*
                                        </label>
                                        <TreeSelect id={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} options={nodes} placeholder="Select Item" className={classNames({ 'p-invalid': fieldState.error })} />
                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />
                        </div>
                        <Button label="Submit" type="submit" icon="pi pi-check" />
                    </form>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}