import { Training } from './training';

export class Data {
    public static list: Training[] = [
        { domain: 'Frontend Dev', title: 'Angular', evaluation: 5, description: 'A cool training about Angular', recommanded: true },
        { domain: 'Frontend Dev', title: 'React', evaluation: 2, description: 'Just to tell why React is not for me', recommanded: false },
        { domain: 'Backend Dev', title: 'Django', evaluation: 2, description: 'Why the hell are you teaching this', recommanded: false },
    ];


}
