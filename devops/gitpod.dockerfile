# docker image for setting up an R environment
FROM gitpod/workspace-full

# install miniconda
ENV PATH /opt/conda/bin:$PATH
RUN wget --quiet https://repo.anaconda.com/miniconda/Miniconda2-4.7.12-Linux-x86_64.sh -O ~/miniconda.sh && \
    sudo /bin/bash ~/miniconda.sh -b -p /opt/conda && \
    rm ~/miniconda.sh && \
    sudo ln -s /opt/conda/etc/profile.d/conda.sh /etc/profile.d/conda.sh && \
    echo ". /opt/conda/etc/profile.d/conda.sh" >> ~/.bashrc && \
    echo "conda activate base" >> ~/.bashrc && \
    sudo /opt/conda/bin/conda install --name base --channel conda-forge mamba=* && \
    sudo find /opt/conda/ -follow -type f -name '*.a' -delete && \
    sudo find /opt/conda/ -follow -type f -name '*.js.map' -delete && \
    sudo /opt/conda/bin/conda clean -afy && \
    conda config --prepend envs_dirs $HOME/.conda/envs && \
    conda config --prepend pkgs_dirs $HOME/.conda/pkgs

ADD ./environment.yml .
RUN mamba env create -f environment.yml

ADD ./dependencies.R .

RUN conda run -n www-main Rscript ./dependencies.R

RUN echo "conda activate www-main" >> ~/.bashrc
ENV PATH /home/gitpod/.conda/envs/www-main/bin:$PATH