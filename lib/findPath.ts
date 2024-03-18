import { INode } from '@/components/ui/loaders/path-finder';

interface QueueNode {
    x: number;
    y: number;
    path: INode[];
}
const getRandom = (range: number) => {
    return Math.floor(Math.random() * 30);
};

export const findPath = (range: number): INode[] | number => {
    const start = { x: getRandom(range), y: getRandom(range) };
    const end = { x: getRandom(range), y: getRandom(range) };

    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    const visited = Array.from({ length: 30 }).map(() =>
        Array.from({ length: 30 }).map(() => -1)
    );

    visited[start.x][start.y] = 0;
    const q: QueueNode[] = [];
    q.push({ ...start, path: [{ ...start }] });

    while (q.length !== 0) {
        const cur = q.shift();
        if (cur === undefined) break;
        if (cur.x === end.x && cur.y === end.y) {
            return cur.path;
        }
        for (let i = 0; i < 4; i++) {
            const nx = cur.x + dx[i];
            const ny = cur.y + dy[i];
            if (nx < 0 || nx >= 30 || ny < 0 || ny >= 30) continue;
            if (visited[nx][ny] !== -1) continue;

            visited[nx][ny] = visited[cur.x][cur.y] + 1;
            q.push({ x: nx, y: ny, path: [...cur.path, { x: nx, y: ny }] });
        }
    }
    return -1;
};
