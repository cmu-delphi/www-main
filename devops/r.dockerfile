# docker image for setting up an R environment
FROM mambaorg/micromamba

ADD ./environment.yml .

#RUN micromamba install --yes --name www-main --file environment.yml
RUN micromamba env create -f environment.yml
ARG MAMBA_DOCKERFILE_ACTIVATE=1
ADD ./dependencies.R .

RUN micromamba run -n www-main Rscript ./dependencies.R

ENV PATH /opt/conda/envs/www-main/bin:$PATH
