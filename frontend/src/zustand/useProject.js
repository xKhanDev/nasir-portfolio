import {create} from "zustand";

const useProjectStore = create((set) => ({
        project: null,
        selectedProject: null,
        setProject: (project) => set({ project }),
        setSelectedProject: (project) => set({ selectedProject: project }),
    }));
    
export default useProjectStore;