import neo4j, {ManagedTransaction, Session} from 'neo4j-driver';

// import { Person } from '../../models/ts/db';

async function _getConnection() {
    const driver = neo4j.driver(
        'neo4j://localhost',
        neo4j.auth.basic('neo4j', 'password')
    )

    return {
        driver,
        [Symbol.asyncDispose]: async () => {
            await driver.close();
        },
        [Symbol.dispose]: async () => {
            await driver.close();
        },
    };
}

async function getSession() {
    using connection = await _getConnection();

    const session = connection.driver.session();

    return {
        session,
        [Symbol.asyncDispose]: async () => {
            await session.close();
        },
        [Symbol.dispose]: async () => {
            await session.close();
        },
    }
}

// async function addPerson(person: Person, session: Session) {
//     const res = await session.executeWrite(
//         (tx: ManagedTransaction) => tx.run<T>(cypher, params)
//     )
// }
