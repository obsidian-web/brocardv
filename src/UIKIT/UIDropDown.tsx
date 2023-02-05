import classes from '../styles/UIKit/UIDropDown.module.scss'
import React, {FC, useState} from 'react' // отступ после импортов
import {FaArrowDown, FaArrowUp} from 'react-icons/fa'

type UIDropDownProps = {
    onClick: (i: string) => void;
    name: string;
    children: string[]
}

const UIDropDown: FC<UIDropDownProps> = (props) => {

    const [active, setActive] = useState<boolean>(false)
    const [selected, setSelected] = useState<string>('')

    return (
        <div className={classes['DropDown']}>
            <div className={classes['DropDown__head']}
                 onClick={() => setActive(!active)}
            >
                {selected ? selected : props.name }
                {active ? <FaArrowUp className={classes['DropDown__head__arrow']}/> : <FaArrowDown className={classes['DropDown__head__arrow']}/>}
            </div>
            { active &&
                <div className={classes['DropDown__body']}>
                    {props.children.map((i: string) =>
                        <div className={classes['DropDown__body-child']} key={i}
                             onClick={() => {
                                 props.onClick(i)
                                 setSelected(i)
                                 setActive(false)
                             }}
                        >
                            {i}
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

// В примере мы не получим выбранный элемент в компоненте в котором используем данный dropDown, нужно решить эту проблему.

export default UIDropDown;


