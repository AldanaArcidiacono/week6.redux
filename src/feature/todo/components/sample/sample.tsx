import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../../../infrastructure/store/store';
import * as ac from '../../reduces/action.creator';

export function Sample() {
    // Antes usabamos => const [first, setfirst] = useState([])
    const tasks = useSelector((state: rootState) => state.tasks);
    const dispatcher = useDispatch();

    useEffect(() => {
        dispatcher(
            ac.loadActionCreator([
                {
                    id: 1,
                    title: 'Finish Redux',
                    responsible: 'Pepe',
                    isComplete: false,
                },
            ])
        );
    }, [dispatcher]);

    return (
        <>
            {tasks.map((item) => (
                <p key={item.id}>{item.title}</p>
            ))}
        </>
    );
}
