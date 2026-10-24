#include <fstream>
using namespace std;

ifstream fin ( "munti.in" );
ofstream fout ( "munti.out" );

int main(){

    int N, x;
    long long S = 0;

    fin >> N;

    for ( int i = 1; i <= N; ++i ){
        fin >> x;
        S = ( S + x ) % N;
    }

    if ( S == 0 )
        fout << N;
    else
        fout << N-1;

    return 0;
}