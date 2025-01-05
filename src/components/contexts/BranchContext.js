import React, { createContext, useContext, useState } from 'react';

const BranchContext = createContext();

export const BranchProvider = ({ children }) => {
  const [branches, setBranches] = useState([
    {
      id: 1,
      branchName: 'SPL-CORPORATE',
      state: 'TAMIL NADU',
      contactPerson: 'S SRINIVASAN',
      contactPhone: '9940093856',
      panNo: 'AAACS4949P',
      gstin: '33AAACS4949P1ZU',
      status: 'Active',
    },
    {
      id: 2,
      branchName: 'CHENNAI',
      state: 'TAMIL NADU',
      contactPerson: 'RAJASEKAR S',
      contactPhone: '9344676628',
      panNo: 'AAACS4949P',
      gstin: '27AAACS4949P1ZN',
      status: 'Active',
    },
  ]);

  const addBranch = (branch) => {
    setBranches([...branches, { ...branch, id: branches.length + 1 }]);
  };

  const updateBranch = (id, updatedBranch) => {
    setBranches(branches.map(branch => 
      branch.id === id ? { ...branch, ...updatedBranch } : branch
    ));
  };

  const deleteBranch = (id) => {
    setBranches(branches.filter(branch => branch.id !== id));
  };

  const getBranch = (id) => {
    return branches.find(branch => branch.id === id);
  };

  return (
    <BranchContext.Provider value={{ branches, addBranch, updateBranch, deleteBranch, getBranch }}>
      {children}
    </BranchContext.Provider>
  );
};

export const useBranch = () => {
  const context = useContext(BranchContext);
  if (!context) {
    throw new Error('useBranch must be used within a BranchProvider');
  }
  return context;
};

